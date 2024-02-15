import { DatePicker, message, Alert, Button } from 'antd';
import React, { useState } from "react";
import { Dayjs } from "dayjs";

const HomePage = () => {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  console.log(message);
  console.log(messageApi);
  console.log(contextHolder);

  
  const handleChange = (value: Dayjs) => {
    messageApi.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
      <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
      </div>
      <Button type="primary">Button</Button>
      {contextHolder}
    </div>
  );
};

export default HomePage;
