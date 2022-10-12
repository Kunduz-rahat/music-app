import { createStore } from "redux";
import {MakeStore, Context, createWrapper} from 'next-redux-wrapper'
import { reducer, RootState } from "./reducers";

const makeStore:MakeStore<RootState> = (context:Context) => createStore(reducer)

export const wrapper = createWrapper<RootState>(makeStore, {debug:true})