import * as global from '../interfaces/global';
// log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', 'G-QXLWDDLHEP', {
      page_path: url,
    })
  }
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};