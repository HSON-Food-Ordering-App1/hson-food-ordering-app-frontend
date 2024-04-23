import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Đơn hàng đã được đặt", value: "placed", progressValue: 0 },
  {
    label: "Đơn hàng đã được thanh toán, đang chờ xác nhận của nhà hàng",
    value: "paid",
    progressValue: 25,
  },
  {
    label: "Đơn hàng đang được xử lý hoặc đang trong quá trình chuẩn bị",
    value: "inProgress",
    progressValue: 50,
  },
  {
    label:
      "Đơn hàng đã được giao cho người giao hàng và đang trên đường đến địa chỉ giao hàng",
    value: "outForDelivery",
    progressValue: 75,
  },
  {
    label: "Đơn hàng đã được giao thành công đến người nhận",
    value: "delivered",
    progressValue: 100,
  },
];
