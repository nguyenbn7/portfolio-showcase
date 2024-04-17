const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				/**
				 * Pallete generator {@link https://uicolors.app/create}
				 */
				primary: {
					50: '#F0F7FF',
					100: '#E0EEFE',
					200: '#BBDDFC',
					300: '#7FC0FA',
					400: '#3BA1F5',
					500: '#1286E5',
					600: '#0563BB',
					700: '#06529E',
					800: '#094783',
					900: '#0E3D6C',
					950: '#092648',
					/**
					 * @alias primary-600
					 */
					original: '#0563BB',
					/**
					 * @alias primary-500
					 */
					default: '#1286E5',
					/**
					 * @alias primary-600
					 */
					hover: '#0563BB',
					/**
					 * @alias primary-700
					 */
					active: '#06529E',
					/**
					 * @alias primary-400
					 */
					'disabled-text': '#3BA1F5',
					/**
					 * @alias primary-100
					 */
					'disabled-bg': '#E0EEFE'
				},
				'dark-grey': {
					50: '#F6F6F6',
					100: '#E7E7E7',
					200: '#D1D1D1',
					300: '#B0B0B0',
					400: '#888888',
					500: '#6D6D6D',
					600: '#5D5D5D',
					700: '#4F4F4F',
					800: '#454545',
					900: '#3D3D3D',
					950: '#121212',
					/**
					 * @alias dark-grey-950
					 */
					original: '#121212',
					/**
					 * @alias dark-grey-500
					 */
					default: '#6D6D6D',
					/**
					 * @alias dark-grey-600
					 */
					hover: '#5D5D5D',
					/**
					 * @alias dark-grey-700
					 */
					active: '#4F4F4F',
					/**
					 * @alias dark-grey-400
					 */
					'disabled-text': '#888888',
					/**
					 * @alias dark-grey-100
					 */
					'disabled-bg': '#E7E7E7'
				},
				'river-bed': {
					50: '#F4F6F7',
					100: '#E3E8EA',
					200: '#C9D2D8',
					300: '#A4B2BC',
					400: '#778B99',
					500: '#5C6F7E',
					600: '#4F5E6B',
					700: '#45505B',
					800: '#3D444D',
					900: '#363B43',
					950: '#21252B'
				},
				'white-smoke': '#F5F5F5'
			}
		}
	},
	plugins: []
};
