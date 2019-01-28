import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import WorkPostPreview from './preview-templates/WorkPostPreview';
import ThoughtsPostPreview from './preview-templates/ThoughtsPostPreview';
import PlayPostPreview from './preview-templates/PlayPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('work', WorkPostPreview);
CMS.registerPreviewTemplate('thoughts', ThoughtsPostPreview);
CMS.registerPreviewTemplate('play', PlayPostPreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
