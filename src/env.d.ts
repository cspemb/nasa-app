/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly NASA_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
