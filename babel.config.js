module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            'next/babel',
            {
                useBuiltIns: 'usage',
                targets: {
                    // oficiálně podporujeme Chrome, Firefox, Edge od jejich vyspecifikované verze
                    chrome: '61',
                    firefox: '60',
                    safari: '11',
                    opera: '48',
                    edge: '13',
                },
            },
        ],
    ];

    const sourceMaps = true;
    const retainLines = true;

    return {
        presets,
        sourceMaps,
        retainLines,
    };
};
