import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { firestore } from "../firebase";
import IReceipt from "../interfaces/Receipt";

export const PostReceiptThunk = (receipt: IReceipt) => async (dispatch: () => void) => {
  try {
    const newReceipt = await firestore.collection("receipts").add(receipt);
  } catch (error) {
    throw "postReceiptThunk Error";
  }
};

export const FetchReceiptsThunk = () => async (dispatch: any) => {
  let FetchedReceipts: IReceipt[] = [];
  try {
    const ReceiptsFirebase = await firestore.collection("receipts").get();
    ReceiptsFirebase.forEach((Receipt) => {
      FetchedReceipts.push({
        name: Receipt.get("name"),
        cost: Receipt.get("cost"),
        createdBy: Receipt.get("createdBy"),
        date: Receipt.get("date"),
        number: Receipt.get("number"),
      });
    });
  } catch (error) {
    throw "Receipts Error :/";
  }
};

const initialState: IReceipt[] = [];

const ReceiptsSlice = createSlice({
  name: "Receipts",
  initialState,
  reducers: {
    FetchReceipts: (state, { payload }: PayloadAction<IReceipt[]>) => {
      return payload;
    },
  },
});

const LoadingReceiptsSlice = createSlice({
  name: "loadingReceipts",
  initialState: true,
  reducers: {
    swicthLoadingReceipts: (state, { payload }: PayloadAction<boolean>) => {
      return payload;
    },
  },
});

export const ReceiptsReducer = {
  Receipts: ReceiptsSlice.reducer,
  loadingReceipts: LoadingReceiptsSlice.reducer,
};
