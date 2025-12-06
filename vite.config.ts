import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
    // Important: always return the modified config
    return mergeConfig(config, {
        server: {
            allowedHosts: [
                'backend.logic-unit.com',
                'localhost',
                '.logic-unit.com', // This allows all subdomains of logic-unit.com
            ],
        },
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    });
};
