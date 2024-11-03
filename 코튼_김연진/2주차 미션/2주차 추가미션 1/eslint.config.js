import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // rules를 추가하는 부분
    rules: {
      'react/prop-types': 'off', // prop-types 사용 안 할 때 경고 끄기
      "react/react-in-jsx-scope": "off",
    },
  },
];