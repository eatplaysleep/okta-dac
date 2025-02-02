import Vue from 'vue';
import Router from 'vue-router';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaVue, { LoginCallback } from '@okta/okta-vue';
import authn from '@/plugins/authn';
import Home from '@/views/Home.vue';
import Activate from '@/components/Activate';
import Tenants from '@/components/Tenants';
// import AppMaster from "@/components/AppMaster";
// import Applications from "@/components/Applications";
import Users from '@/components/Users';
import Tokens from '@/components/Tokens';
import Settings from '@/components/Settings';
import TenantApps from '@/components/TenantApps';
import config from '@/.config.js';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: 'Home',
				requiresAuth: true,
			},
		},
		{
			path: '/activate/:token',
			name: 'activate',
			component: Activate,
			meta: {
				title: 'Activate',
			},
		},
		{
			path: '/oauth/callback',
			component: LoginCallback,
		},
		{
			path: '/tokens',
			name: 'tokens',
			component: Tokens,
			meta: {
				title: 'Tokens',
				requiresAuth: true,
			},
		},
		{
			path: '/users',
			name: 'users',
			component: Users,
			meta: {
				title: 'Users',
				requiresAuth: true,
			},
		},
		{
			path: '/settings',
			name: 'settings',
			component: Settings,
			meta: {
				title: 'Settings',
				requiresAuth: true,
			},
		},
		{
			path: '/apps',
			name: 'tenantApps',
			component: TenantApps,
			meta: {
				title: 'TenantApps',
				requiresAuth: true,
			},
		},
		{
			path: '/tenants',
			name: 'tenants',
			component: Tenants,
			meta: {
				title: 'Tenants',
				requiresAuth: true,
			},
		},
	],
});

config.oidc.redirect_uri = window.location.protocol + '//' + window.location.host + config.oidc.redirect_uri;

const { client_id: clientId, redirect_uri: redirectUri, ...oidcConfig } = config.oidc;

const oktaAuth = new OktaAuth({
	clientId,
	redirectUri,
	...oidcConfig,
	scopes: typeof config.oidc.scope === 'string' ? config.oidc.scope.split(' ') : config.oidc.scope,
	pkce: true,
});

Vue.use(OktaVue, {
	oktaAuth,
});

Vue.use(authn, Vue.prototype.$auth);

export default router;
