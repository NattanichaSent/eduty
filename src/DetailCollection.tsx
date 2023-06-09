import React from "react";
import "./DetailCollection.css";
import Navbar from "./components/Navbar";

export default function DetailCollection() {
  return (
    <div>
      <meta name="viewport" content="width=1920px, initial-scale=1.0"></meta>
      <Navbar></Navbar>
      <div className="space2">
        <div className="title spaceTitle">
          <div className="line"></div>
          <div>Detail Correction</div>
        </div>

        <div className="Transection">
          <div className="BatchBar shadow ">
            <div className="space3 ">
              <div className="Batch  shadow  space4">
                <div className="row spaceTitle btw">
                  <div className="row">
                    <p className="tab">Batch Date : 31/10/2022</p>
                    <div className="tab line3"></div>
                    <p className="tab">Lot Name : lot_14</p>
                  </div>
                  <p className="row ">
                    Status :<div className="yellow">Pending</div>
                  </p>
                </div>
                <div className="row">
                  <p className="tab1 ">Total Duty : 2,000</p>
                  <div className="tab line3"></div>
                  <p className="tab">Total Dup Duty Amount : 0</p>
                  <div className="tab line3"></div>
                  <p className="tab">Total Payment : 2,000</p>
                </div>
              </div>

              <div className="Table top">
                <table>
                  <tr>
                    <th>No.</th>
                    <th>InstInfo ID</th>
                    <th>TaxPayer ID</th>
                    <th>Name</th>
                    <th>Total Duty</th>
                    <th>TotalDubDutyAmount</th>
                    <th>Total Payment</th>
                    <th>Edit</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2562/10</td>
                    <td>1102918928918</td>
                    <td>Sompong Karndee</td>
                    <td>100</td>
                    <td>0 </td>
                    <td>100</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16ZM15 6l3 3m-5 11h8"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="active">2</td>
                    <td className="active">2562/10</td>
                    <td className="active">1102918928918</td>
                    <td className="active">Sompong Karndee</td>
                    <td className="active">100</td>
                    <td className="active">0 </td>
                    <td className="active">100</td>
                    <td className="active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16ZM15 6l3 3m-5 11h8"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2562/10</td>
                    <td>1102918928918</td>
                    <td>Sompong Karndee</td>
                    <td>100</td>
                    <td>0 </td>
                    <td>100</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16ZM15 6l3 3m-5 11h8"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>2562/10</td>
                    <td>1102918928918</td>
                    <td>Sompong Karndee</td>
                    <td>100</td>
                    <td>0 </td>
                    <td>100</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16ZM15 6l3 3m-5 11h8"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>2562/10</td>
                    <td>1102918928918</td>
                    <td>Sompong Karndee</td>
                    <td>100</td>
                    <td>0 </td>
                    <td>100</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16ZM15 6l3 3m-5 11h8"
                        />
                      </svg>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="page&butt row top2 ">
                <div className="pagination end">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 2 16 16"
                    >
                      <g transform="translate(24 0) scale(-1 1)">
                        <path
                          fill="none"
                          stroke="#489788"
                          stroke-width="2"
                          d="m9 6l6 6l-6 6"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="#" className="active">
                    1
                  </a>
                  <a href="#">2</a>

                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 2 16 16"
                    >
                      <path
                        fill="none"
                        stroke="#489788"
                        stroke-width="2"
                        d="m9 6l6 6l-6 6"
                      />
                    </svg>
                  </a>
                </div>
                <div className="ButtonAction ">
                  <button className="apbutt tab2">Approve</button>
                  <button className="dnbutt">Denied</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
