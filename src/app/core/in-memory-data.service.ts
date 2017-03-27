import { InMemoryDbService } from 'angular-in-memory-web-api';

import { news } from './data/news.data';
import { shows } from './data/shows.data';
import { band } from './data/band.data';
import { discography } from './data/discography.data';
import { videos } from './data/videos.data';
import { reviews } from './data/reviews.data';
import { photos } from './data/photos.data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { news, shows, band, discography, photos, videos, reviews };
    }
}
