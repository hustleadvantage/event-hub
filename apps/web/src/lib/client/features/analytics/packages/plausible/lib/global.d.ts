type PlausibleConfig = {
	domain: string;
};

type PlausibleOptions = {
	callback?: (e: any) => any;
	props?: Record<string, any>;
	u?: string; // url
};

declare const plausible: (event: string, options?: PlausibleOptions) => void;
