import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './CampaignChart.module.css';

const CampaignChart = ({ stats, chartData, additionalStats }) => {

  return (
    <div className={styles.chartSection}>
      <div className={styles.statsRow}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className={styles.chartContent}>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={chartData} barSize={70}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }}
              />
              <Bar dataKey="value" fill="#2196F3" radius={[4, 4, 0, 0]}>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.additionalStats}>
          {additionalStats.map((stat, index) => (
            <div key={index} className={styles.additionalStat}>
              <div className={styles.additionalStatLabel}>{stat.label}</div>
              <div className={styles.additionalStatValue}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignChart;
