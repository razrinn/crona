import { useState, useEffect } from "react";
import { summaryUrl, areaUrl, dailyUrl } from "./url";

const fetchData = (url) => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data...");
            const result = await fetch(url)
                .then((response) => response.json())
                .catch((err) => err);
            setData(result);
        };
        fetchData();
    }, []);
    return data;
};

const useSummaryStats = () => fetchData(summaryUrl);
const useProvinceStats = () => fetchData(areaUrl);
const useLastUpdate = () => {
    const response = fetchData(dailyUrl);
    return response
        ? response.data[response.data.length - 1].jumlahKasusBaruperHari
            ? new Date(response.data[response.data.length - 1].tanggal)
            : new Date(response.data[response.data.length - 2].tanggal)
        : null;
};
const usePercentageStats = () => {
    const response = fetchData(dailyUrl);
    const recentData = response
        ? response.data[response.data.length - 1].jumlahKasusBaruperHari
            ? response.data[response.data.length - 1]
            : response.data[response.data.length - 2]
        : null;
    return recentData
        ? {
              perawatan: recentData.persentasePasiendalamPerawatan.toFixed(2),
              sembuh: recentData.persentasePasienSembuh.toFixed(2),
              meninggal: recentData.persentasePasienMeninggal.toFixed(2),
          }
        : null;
};
const useDailyStats = () => fetchData(dailyUrl);
export {
    useSummaryStats,
    useProvinceStats,
    useLastUpdate,
    usePercentageStats,
    useDailyStats,
};