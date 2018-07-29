// Import the views for the routes.
import Home from '@/views/HomeView';
import AutocompleteField from '@/views/AutocompleteFieldView';
import ArticleAggregator from '@/views/ArticleAggregatorView';
import Tabs from '@/views/TabsView';
import Alerts from '@/views/AlertsView';

// Define the routes.
// exclude: when on this route remove the main navigation.
export default [
	{ path: '/', name: 'home', component: Home, title: 'Home' },
	{ path: '/autocomplete-field', name: 'autocomplete-field', component: AutocompleteField, title: 'Autocomplete Field' },
	{ path: '/article-aggregator', name: 'article-aggregator', component: ArticleAggregator, title: 'Article Aggregator' },
	{ path: '/tabs', name: 'tabs', component: Tabs, title: 'Tabs' },
	{ path: '/alerts', name: 'alerts', component: Alerts, title: 'Alerts' }
];
