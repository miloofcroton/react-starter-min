import { Fallback } from './Fallback';
import Paragraph from './Paragraph';
import Gif from './Gif';

export const LoadingParagraph = Fallback(Paragraph);

export const LoadingGif = Fallback(Gif);
