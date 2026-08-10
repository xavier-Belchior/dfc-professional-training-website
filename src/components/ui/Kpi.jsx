import CountUp from "./CountUp";
import { Card } from "./Card";
import { TrendingUp } from "lucide-react";

export const Kpi = ({ title, value, icon: Icon, color = "green" }) => {
  return (
    <Card className="w-full flex items-center gap-4 ">
      <div className="w-14 bg-green/10  h-14 rounded-2xl flex justify-center items-center p-4 ">
        <Icon className="text-emerald-600" />
      </div>

      <div className="flex flex-col  justify-center items-start">
        <h3 className="text-xl font-bold ">
          +
          <CountUp
            from={0}
            to={value}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text"
            delay={0}
          />
        </h3>
        <p className="text-sm text-muted-foreground font-normal">{title}</p>
      </div>
    </Card>
  );
};
