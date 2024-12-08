import React from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";
const Index = () => {
  const handleClick = () => {
    Taro.showToast({
      title: "Hello, 微信小程序!",
      icon: "success",
    });
  };

  return (
    <View className="index">
      <Text>欢迎来到我的轻量级小程序</Text>
      <Button onClick={handleClick}>点我试试</Button>
    </View>
  );
};

export default Index;
