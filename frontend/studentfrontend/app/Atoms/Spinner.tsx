import { Spin } from "antd"

interface SpinnerProps {
  isLoading: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  return  <Spin spinning={isLoading} fullscreen />
}