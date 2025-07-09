export type DashboardData = {
    totalOrdersToday: number;
    revenueToday: number;
    availableItems: number;
    pendingOrders: number;
    recentOrders: Order[];
    topItems: MenuItem[];
};
