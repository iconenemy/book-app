import { lazy } from 'react';

const CRMContainer = lazy(() => import("./CRMContainer"));
const CRMTableContainer = lazy(() => import("./CRMTableContainer"));
const CRMTable = lazy(() => import("./CRMTable"));
const CRMTableHead = lazy(() => import("./CRMTableHead"));
const CRMTableBody = lazy(() => import("./CRMTableBody"));
const CRMCollapse = lazy(() => import("./CRMCollapse"));
const AdminTableRow = lazy(() => import("./admin/AdminTableRow"));
const ManagerTableRow = lazy(() => import("./manager/ManagerTableRow"));

export {
    CRMContainer,
    CRMTableContainer,
    CRMTable,
    CRMTableHead,
    CRMTableBody,
    CRMCollapse,
    AdminTableRow,
    ManagerTableRow
}