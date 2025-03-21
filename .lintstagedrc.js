export default {
  'src/**/*.{vue,ts,js}': [
    'eslint --rule "no-console:error" --max-warnings=0',
    () => 'tsc -p tsconfig.json --noEmit',
  ],
}
