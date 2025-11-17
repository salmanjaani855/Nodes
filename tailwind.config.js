/** @type {import('tailwindcss').Config} */
module.exports = {
  	"content": [
    		"./src/**/*.{js,jsx,ts,tsx}"
  	],
  	"theme": {
    		"extend": {
      			"colors": {
        				"gray": {
          					"100": "#fafafa",
          					"200": "#262626",
          					"300": "#222",
          					"400": "#191919",
          					"500": "#171717",
          					"600": "#040404",
          					"700": "rgba(255, 255, 255, 0.05)",
          					"800": "rgba(255, 255, 255, 0.4)",
          					"900": "rgba(0, 0, 0, 0.8)",
          					"1000": "rgba(255, 255, 255, 0.1)",
          					"1100": "rgba(255, 255, 255, 0.8)",
          					"1200": "rgba(38, 38, 38, 0.5)",
          					"1300": "rgba(250, 250, 250, 0.75)"
        				},
        				"silver": "rgba(196, 196, 196, 0)",
        				"mediumspringgreen": {
          					"100": "#4ade80",
          					"200": "rgba(74, 222, 128, 0.3)"
        				},
        				"darkslategray": {
          					"100": "#404040",
          					"200": "#2f333f",
          					"300": "rgba(51, 51, 51, 0.8)"
        				},
        				"aquamarine": "#6ae6b0",
        				"gainsboro": {
          					"100": "#e5e7eb",
          					"200": "#e5e5e5"
        				},
        				"darkgray": {
          					"100": "#a3a3a3",
          					"200": "#9ca3af"
        				},
        				"white": "#fff",
        				"whitesmoke": "#f3f4f6",
        				"tomato": "#f44336",
        				"gold": "#ffc107",
        				"forestgreen": "#4caf50",
        				"mediumseagreen": "#66bb6a",
        				"orchid": "#ba68c8",
        				"lightskyblue": "#81d4fa"
      			},
      			"spacing": {
        				"num-624": "624px",
        				"num-515": "515px",
        				"num-239": "239px",
        				"num-325": "325px",
        				"num-130_7": "130.7px",
        				"num-8_4": "8.4px",
        				"num-12_6": "12.6px",
        				"num-10_5": "10.5px",
        				"num-25_8": "25.8px",
        				"num-3_4": "3.4px",
        				"num-683": "683px",
        				"num-14_2": "14.2px",
        				"num-7_4": "7.4px",
        				"num-5_6": "5.6px",
        				"num-5_1": "5.1px",
        				"num-2_9": "2.9px",
        				"num-1": "1px solid #4ade80"
      			},
      			"fontFamily": {
        				"inter": "Inter",
        				"roboto": "Roboto",
        				"roboto-mono": "Roboto Mono"
      			},
      			"borderRadius": {
        				"num-50": "50%",
        				"num-4": "4px",
        				"num-4_22": "4.22px",
        				"num-0": "0px",
        				"num-5_27": "5.27px"
      			},
      			"padding": {
        				"num-8_4": "8.4px",
        				"num-12_6": "12.6px",
        				"num-4_2": "4.2px",
        				"num-1_1": "1.1px",
        				"num-3_2": "3.2px"
      			},
      			"opacity": {
        				"num-0_07": "0.07"
      			}
    		},
    		"fontSize": {
      			"num-24": "1.5rem",
      			"num-16": "1rem",
      			"num-20": "1.25rem",
      			"num-48": "3rem",
      			"num-14": "0.875rem",
      			"num-8_43": "0.527rem",
      			"num-4_22": "0.264rem",
      			"num-3_69": "0.231rem",
      			"num-7_38": "0.461rem",
      			"num-6_32": "0.395rem",
      			"num-18": "1.125rem"
    		},
    		"lineHeight": {
      			"num-20": "20px",
      			"num-16": "16px",
      			"num-48": "48px",
      			"num-24": "24px",
      			"num-14": "14px",
      			"num-4_22": "4.22px",
      			"num-18": "18px"
    		},
    		"letterSpacing": {
      			"num--0_03": "-0.03em"
    		}
  	},
  	"corePlugins": {
    		"preflight": false
  	}
}


