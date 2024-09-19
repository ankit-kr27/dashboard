import { useSelector } from "react-redux";
import StatCard from "../stat-card/stat-card";

const Stats = () => {
    const { stats } = useSelector(state => state.stats);
    return <div className="flex px-8 gap-8 flex-wrap">
        <StatCard title={"Purchases"} valueString={stats.purchases} growthType={'success'} growthValue={'32%'} />
        <StatCard title={"Revenue"} valueString={`$ ${stats.revenue}`} growthType={'success'} growthValue={'32%'} />
        <StatCard title={"Refunds"} valueString={`$ ${stats.refunds}`} growthType={'failure'} growthValue={'32%'} />
    </div>;
};

export default Stats;
