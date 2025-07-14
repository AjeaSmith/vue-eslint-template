// import { globalIgnores } from 'eslint/config'
// import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import pluginVue from 'eslint-plugin-vue'

// // To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// // import { configureVueProject } from '@vue/eslint-config-typescript'
// // configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// // More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// export default defineConfigWithVueTs(
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//   },

//   globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

//   pluginVue.configs['flat/essential'],
//   vueTsConfigs.recommended,
// )
import antfu from "@antfu/eslint-config";

export default antfu(
  {
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["README.md", "**/README.md", "readme.md", "**/readme.md", "dist", "node_modules"],
  },
  {
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
    },
  }
);
