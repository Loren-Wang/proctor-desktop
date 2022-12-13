import React from "react"
import { PathOptions } from "../svg-dict"

export const path = (props: PathOptions) =>
    <g fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 5.58172 16.4183 2 12 2C7.58174 2 4.00002 5.58172 4.00002 10C4.00002 13.2745 5.96732 16.0895 8.78446 17.3275L4.17808 20.0572C3.47807 20.472 3.77224 21.5455 4.58592 21.5455H18.8094C19.6184 21.5455 19.9162 20.4819 19.2248 20.0618L14.9242 17.4487C17.8961 16.2811 20 13.3863 20 10ZM6.5143 10C6.5143 6.97032 8.97034 4.51429 12 4.51429C15.0297 4.51429 17.4857 6.97032 17.4857 10C17.4857 13.0297 15.0297 15.4857 12 15.4857C8.97034 15.4857 6.5143 13.0297 6.5143 10ZM15.8788 9.87879C15.8788 7.66965 14.0879 5.87879 11.8788 5.87879C10.9106 5.87879 10.0227 6.2228 9.33073 6.79526C9.11643 6.93357 8.93359 7.11642 8.79527 7.33071C8.22281 8.02268 7.8788 8.91056 7.8788 9.87879C7.8788 12.0879 9.66967 13.8788 11.8788 13.8788C14.0879 13.8788 15.8788 12.0879 15.8788 9.87879ZM8.79527 7.33071C8.61501 7.61 8.51038 7.9427 8.51038 8.29984C8.51038 9.28814 9.31156 10.0893 10.2999 10.0893C11.2882 10.0893 12.0893 9.28814 12.0893 8.29984C12.0893 7.31154 11.2882 6.51037 10.2999 6.51037C9.94272 6.51037 9.61002 6.61499 9.33073 6.79526C9.13584 6.95648 8.9565 7.13583 8.79527 7.33071Z" fill={props.iconPrimary} />
    </g>



export const viewBox = "0 0 24 24"