import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { motion } from "framer-motion";

interface Props {}
interface DataType {
  key: string;
  TransactionID: number;
  WalletsAddress: string;
  Currency: string;
  Amount: number;
  UserID: number;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Transaction ID",
    dataIndex: "TransactionID",
    key: "TransactionID",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Wallets Address",
    dataIndex: "WalletsAddress",
    key: "WalletsAddress",
  },
  {
    title: "Currency",
    dataIndex: "Currency",
    key: "Currency",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
  },
  {
    title: "User ID",
    dataIndex: "UserID",
    key: "UserID",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <span
        className={
          tags.includes("availble")
            ? "bg-white border border-[#00D43C8A] rounded-lg px-2 py-1 text-[#00D43C8A] font-medium"
            : " bg-white border border-[#FF030399] rounded-lg px-2 py-1 text-[#FF030399] font-medium"
        }
      >
        {tags[0].toUpperCase()}
      </span>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    TransactionID: 1111111,
    WalletsAddress: "afghks004569",
    Currency: "Bitcoin",
    Amount: 69000000,
    UserID: 200109600,
    tags: ["availble"],
  },
  {
    key: "2",
    TransactionID: 1111110,
    WalletsAddress: "eadas004569",
    Currency: "LKR",
    Amount: 79000000,
    UserID: 200109600,
    tags: ["not availble"],
  },
  {
    key: "3",
    TransactionID: 1111100,
    WalletsAddress: "csd21r1thgfhrj",
    Currency: "USD",
    Amount: 89000000,
    UserID: 200109600,
    tags: ["availble"],
  },
  {
    key: "4",
    TransactionID: 1111111,
    WalletsAddress: "afghks004569",
    Currency: "Bitcoin",
    Amount: 69000000,
    UserID: 200109600,
    tags: ["availble"],
  },
  {
    key: "5",
    TransactionID: 1111110,
    WalletsAddress: "eadas004569",
    Currency: "LKR",
    Amount: 79000000,
    UserID: 200109600,
    tags: ["not availble"],
  },
  {
    key: "6",
    TransactionID: 1111100,
    WalletsAddress: "csd21r1thgfhrj",
    Currency: "USD",
    Amount: 89000000,
    UserID: 200109600,
    tags: ["availble"],
  },
  {
    key: "7",
    TransactionID: 1111111,
    WalletsAddress: "afghks004569",
    Currency: "Bitcoin",
    Amount: 69000000,
    UserID: 200109600,
    tags: ["availble"],
  },
  {
    key: "8",
    TransactionID: 1111110,
    WalletsAddress: "eadas004569",
    Currency: "LKR",
    Amount: 79000000,
    UserID: 200109600,
    tags: ["not availble"],
  },
  {
    key: "9",
    TransactionID: 1111100,
    WalletsAddress: "csd21r1thgfhrj",
    Currency: "USD",
    Amount: 89000000,
    UserID: 200109600,
    tags: ["availble"],
  },
];

const Donate = (props: Props) => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <div className="lg:container lg:mx-auto flex flex-col ">
      <div className="lg:p-20 p-8 flex flex-col bg-[#EFF4F8]">
        <div className="text-4xl font-bold">Save the Children</div>
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
          <div className="h-auto lg:w-1/2 flex flex-col gap-4">
            <motion.img
              src="assets/images/Donate.png"
              alt="CampaignCard1"
              className="w-full object-fill"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="text-sm font-normal">
              Join us in making a difference today by donating to help provide
              food and sustenance for the children of Africa who are currently
              suffering from severe food shortage. Every contribution counts!
            </div>
          </div>
          <div className="lg:w-1/2  lg:p-20 flex flex-col gap-4">
            <div>
              <span className="text-base font-medium"> Type: </span>
              <span></span>
            </div>
            <div>
              <span className="text-base font-medium">Location:</span>
              <span></span>
            </div>
            <div>
              <span className="text-base font-medium">Duration:</span>
              <span></span>
            </div>
            <div>
              <span className="text-base font-medium">
                {" "}
                Total Donation Amount:
              </span>
              <span></span>
            </div>
            <div>
              <span className="text-base font-medium">
                Minimum Donation Amount:
              </span>
              <span></span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#00B5D5] text-xl font-bold">
                Donate Now
              </span>
              <div className="flex flex-row gap-4">
                <motion.input
                  type="range"
                  className="w-full"
                  value={value}
                  min={1}
                  max={100}
                  onChange={handleChange}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                <motion.div
                  className="flex flex-row gap-4 bg-[#FEAE0F40] px-7 py-3  rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="font-bold text-xl">$</span>
                  <span className="text-xl">{value}</span>
                </motion.div>
              </div>
              <motion.div
                className="flex flex-row gap-4 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <input type="radio" className="" />
                <span>Donate Anonymously</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <button className="text-[#00B5D5] font-bold border border-[#00B5D5] p-2 rounded-md hover:bg-[#00B5D5] hover:text-white">
                  Donate 💙
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:p-20 p-8 flex flex-col gap-10 bg-gray-100"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Live Ledger
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="overflow-scroll scroll-smooth scrollbar-hide relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className="w-full rounded-lg border border-gray-400"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Donate;
