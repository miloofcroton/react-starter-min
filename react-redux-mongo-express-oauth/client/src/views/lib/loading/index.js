import { FallbackWithFetch } from './Fallback';
import Paragraph from './Paragraph';

export const LoadingWithParagraph = FallbackWithFetch(Paragraph);
