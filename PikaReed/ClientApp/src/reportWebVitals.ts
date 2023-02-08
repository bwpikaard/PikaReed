const reportWebVitals = async (onPerfEntry: () => unknown): Promise<void> => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        await import("web-vitals").then(({
            getCLS, getFID, getFCP, getLCP, getTTFB,
        }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
