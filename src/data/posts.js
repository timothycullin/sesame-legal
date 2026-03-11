import { nzyqHumanRightsCase } from './posts/nzyq-human-rights-case.js';
import { nauruDeportationDeal } from './posts/australia-nauru-deportation-deal.js';
import { restrictedProBono } from './posts/restricted-pro-bono-new-lawyers.js';
import { ayatollahToll } from './posts/ayatollah-toll-righteous-war.js';

export const posts = [
    ayatollahToll,
    nauruDeportationDeal,
    nzyqHumanRightsCase,
    restrictedProBono,
].sort((a, b) => new Date(b.date) - new Date(a.date));