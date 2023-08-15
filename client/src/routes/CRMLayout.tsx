import { Suspense } from 'react'
import { Outlet, } from 'react-router-dom'

import { Loading, NotFound } from '.'
import { CRMHeader } from '../components/layout'
import { useAppSelector } from '../app/hooks'
import { CRMContainer, CRMTable, CRMTableBody, CRMTableContainer, CRMTableHead } from '../components/crm'

const CRMLayout = () => {
    const { role } = useAppSelector(state => state.persistedReducer.auth.user)
    if (role === 'guest') return <NotFound />

    return (
        <Suspense fallback={<Loading />}>
            <CRMHeader />
            <CRMContainer>
                <CRMTableContainer>
                    <CRMTableContainer>
                        <CRMTable>
                            <CRMTableHead />
                            <CRMTableBody>
                                <Outlet />
                            </CRMTableBody>
                        </CRMTable>
                    </CRMTableContainer>
                </CRMTableContainer>
            </CRMContainer>
        </Suspense>
    )
}

export default CRMLayout