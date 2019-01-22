import { FallbackWithFetch } from './Fallback';
import Paragraph from './Paragraph';
import Gif from './Gif';

export const LoadingParagraph = FallbackWithFetch(Paragraph);

export const LoadingGif = FallbackWithFetch(Gif);
