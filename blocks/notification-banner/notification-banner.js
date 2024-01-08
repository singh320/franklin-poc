import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the banner
 * @param {Element} block The banner block element
 */
export default async function decorate(block) {
  const bannerMeta = getMetadata('notification-banner');
  block.textContent = '';

  // load banner fragment
  const bannerPath = bannerMeta.notification || '/notification-banner';
  const fragment = await loadFragment(bannerPath);

  // decorate banner DOM
  const banner = document.createElement('div');
  while (fragment.firstElementChild) banner.append(fragment.firstElementChild);

  block.append(banner);
}
