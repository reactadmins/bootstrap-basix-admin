import { useState } from "react";
import tableData from "../data/tableData";
import TablesStyle from "../../assets/scss/Tables.module.scss";

const Table = ({ isSearch = false, isVariants = false }) => {
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState(10);

    return (
        <div className={`table-responsive  ${TablesStyle.table_wrapper}`}>
            {isSearch ? (
                <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                    <div className="d-flex align-items-center">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            <i className="fa fa fa-search"></i>
                        </button>
                    </div>
                    <div className={TablesStyle.show_entries}>
                        <select
                            value={select}
                            className="btn btn-primary"
                            onChange={(e) => setSelect(e.target.value)}
                        >
                            <option value={10}> Show 10 entries</option>
                            <option value={25}> Show 25 entries</option>
                            <option value={50}> Show 50 entries</option>
                            <option value={100}> Show 100 entries</option>
                        </select>
                    </div>
                </div>
            ) : null}

            <table className={`table ${TablesStyle.table}`}>
                <thead className={`text-primary thead ${TablesStyle.thead}`}>
                    <tr>
                        {isVariants ? <td></td> : null}
                        <td>Name</td>
                        <td>Email</td>
                        <td>City</td>
                        <td className="text-center">Score</td>
                        {isVariants ? <td></td> : null}
                    </tr>
                </thead>
                <tbody className={`tbody ${TablesStyle.tbody}`}>
                    {tableData
                        ?.slice(0, select)
                        .filter((item) => {
                            return search.toLowerCase() === ""
                                ? item
                                : item.name
                                      .toLocaleLowerCase()
                                      .includes(search) ||
                                      item.email
                                          .toLocaleLowerCase()
                                          .includes(search) ||
                                      item.city
                                          .toLocaleLowerCase()
                                          .includes(search);
                        })
                        .map((item, index) => (
                            <tr
                                key={index}
                                className={`${
                                    isVariants && item.tableBg
                                        ? item.tableBg
                                        : ""
                                }`}
                            >
                                {isVariants ? (
                                    <td>
                                        {item?.badge?.status ? (
                                            <span
                                                className={`badge text-uppercase ${item?.badge?.badgeBg}`}
                                            >
                                                {item?.badge?.status}
                                            </span>
                                        ) : null}
                                    </td>
                                ) : null}
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td className="text-center">{item.score}</td>
                                {isVariants ? (
                                    <td>
                                        {item?.statusIcon ? (
                                            <i
                                                className={`${item?.statusIcon} text-${item?.badge?.status}`}
                                            ></i>
                                        ) : null}
                                    </td>
                                ) : null}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

