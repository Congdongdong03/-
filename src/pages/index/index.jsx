import React, { useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";

const Index = () => {
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <View className="index">
      {/* 顶部区域 */}
      <View className="header">
        <View className="title">
          <Text>每日菜单 (｀・ω・´)</Text>
          <Text className="sub-title">共3人</Text>
        </View>
      </View>

      {/* 点单/编辑切换 */}
      <View className="tabs">
        <View
          className={`tab ${activeTab === "menu" ? "active" : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          <Text>点单</Text>
        </View>
        <View
          className={`tab ${activeTab === "edit" ? "active" : ""}`}
          onClick={() => setActiveTab("edit")}
        >
          <Text>编辑</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;
