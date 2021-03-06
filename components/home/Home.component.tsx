import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FilterTag, Product } from '../../@types/products';
import styles from './Home.module.scss';
import { ProductCard } from '../product_card/ProductCard.component';
import useCollapse from 'react-collapsed';
import { getTags } from '../../services/apiService';

interface HomeProps {
  products: Product[];
}

export const HomeComponent: React.FC<HomeProps> = ({products}) => {

  const [isExpanded, setExpanded] = React.useState(true);
  const [isMobile, setMobile] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>(products);
  const [tags, setTags] = React.useState<FilterTag[]>([]);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const handleOnClick = () => {
    if (isMobile) {
      setExpanded(!isExpanded)
    }
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 650) {
        setExpanded(false);
        setMobile(true)
      } else {
        setExpanded(true);
        setMobile(false)
      }
    }

    if (window.innerWidth < 650) {
      setMobile(true);
      setExpanded(false);
    }

    window.addEventListener('resize', handleResize)
  }, []);

  React.useEffect(() => {
    async function getFilters() {
      const res = await getTags();
      const filters = res.tags.map((tag: { selected: boolean; }) => {
        tag.selected = false;
        return tag;
      })
      setTags(res.tags);
    }

    setFilteredProducts(products);

    getFilters();
  }, [products])

  const filter = (tag: FilterTag) => {
    const modifiedTags = tags.map(t => {
      if (t.tag === tag.tag) {
        t.selected = !t.selected;
      }
      return t;
    });
    setTags(modifiedTags);
    const filterActive = modifiedTags.filter(t => t.selected);
    const filteredProducts: Product[] = [];
    if (filterActive.length === 0) {
      setFilteredProducts(products);
    } else {
      filterActive.forEach(tag => {
        products.forEach(product => {
          if (product.tags.includes(tag.tag) && !filteredProducts.includes(product)) {
            filteredProducts.push(product);
          }
        })
      })
      setFilteredProducts(filteredProducts);
    }
  }

  return (
    <div className={styles.container}>
      {tags.length > 0 && (
        <div className={styles.filters}>
          <div className={styles.filterTitle} {...getToggleProps({ onClick: handleOnClick })}>
            <h2>Categor??as</h2>
            <div>
              <Image src={'/assets/img/icons/arrow-down-icon.png'} alt="Arrow" width={10} height={10}></Image>
            </div>
          </div>
          <div className={styles.filterContent} {...getCollapseProps()}>
            {tags.map((tag) => (
              <div className={styles.filterItem} key={tag.tag} onClick={() => filter(tag)}>
                <label htmlFor="acceptTerms" className="form-check-label">{tag.label}</label>
                <input name="acceptTerms" type="checkbox" id="acceptTerms" checked={tag.selected} className={`form-check-input`} onChange={() => console.log(tag)} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.products}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
