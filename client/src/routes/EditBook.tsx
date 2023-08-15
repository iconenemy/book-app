import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'

import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

import {
    useDeleteBookByIdMutation,
    useGetAllSectionQuery,
    useGetBookByIdQuery,
    useUdpateBookByIdMutation
} from '../features/auth/authApiSlice'
import { useAppSelector } from '../app/hooks'
import { WhiteButton } from '../components/inputs'
import { ROUTE } from '../consts'

type Params = {
    id: string
}

const EditBook = () => {
    const navigate = useNavigate()
    const { id } = useParams<Params>()
    
    const { id: userid } = useAppSelector(state => state.persistedReducer.auth.user)
    const { data: sections } = useGetAllSectionQuery()
    const { data: book } = useGetBookByIdQuery(atob(id as string))
    
    const [deleteBook] = useDeleteBookByIdMutation()
    const [updateBook] = useUdpateBookByIdMutation()

    const [error, setError] = useState<string>("")
    
    const formik = useFormik({
        initialValues: {
            id: book?.id || "",
            title: book?.title || "",
            author: book?.author || "",
            isbn: book?.isbn || "",
            description: book?.description || "",
            page_count: book?.page_count || 0,
            owner: userid,
            section: []
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            setError("")
            await updateBook(values)
                .unwrap()
                .then(() => navigate(ROUTE.COLLECTION_ABSOLUTE))
                .catch(({ error }) => setError(error))
        }
    })

    const handleDelete = () => {
        if (id) deleteBook(atob(id)).unwrap().then(() => navigate(ROUTE.COLLECTION_ABSOLUTE))
    }

    return (
        <div>
            <form className="w-full" onSubmit={formik.handleSubmit}>
                <div className="my-8 h-16">
                    <TextField
                        fullWidth
                        variant="standard"
                        error={!!formik.touched.title && !!formik.errors.title}
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        placeholder="Enter title*"
                        helperText={formik.errors.title}
                    />
                </div>
                <div className="mt-8 mb-4 h-16">
                    <TextField
                        fullWidth
                        variant="standard"
                        error={!!formik.touched.author && !!formik.errors.author}
                        id="author"
                        name="author"
                        onChange={formik.handleChange}
                        value={formik.values.author}
                        placeholder="Enter author*"
                        helperText={formik.errors.author}
                    />
                </div>
                <div className="mt-8 mb-4 h-16">
                    <TextField
                        fullWidth
                        variant="standard"
                        error={!!formik.touched.description && !!formik.errors.description}
                        id="description"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        placeholder="Enter description*"
                        helperText={formik.errors.description}
                    />
                </div>
                <div className="mt-8 mb-4 h-16">
                    <TextField
                        fullWidth
                        variant="standard"
                        error={!!formik.touched.isbn && !!formik.errors.isbn}
                        id="isbn"
                        name="isbn"
                        onChange={formik.handleChange}
                        value={formik.values.isbn}
                        placeholder="Enter isbn*"
                        helperText={formik.errors.isbn}
                    />
                </div>
                <div className="mt-8 mb-8 h-16">
                    <TextField
                        fullWidth
                        variant="standard"
                        label='Enter count of page'
                        error={!!formik.touched.page_count && !!formik.errors.page_count}
                        id="page_count"
                        name="page_count"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.page_count}
                        placeholder="Enter page_count*"
                        helperText={formik.errors.page_count}
                    />
                </div>
                <span className='text-[12px]'>Choose section:</span>
                <div role="group" aria-labelledby="checkbox-group" className='flex flex-wrap my-4 gap-4 justify-center'>
                    {sections?.map(({ id, section_name }) =>
                        <label key={id} className='flex flex-row gap-2 items-center'>
                            <input
                                name="section"
                                type="checkbox"
                                onChange={formik.handleChange}
                                value={id}
                                className='accent-black h-4 w-4 rounded-[50%]'
                            />
                            {section_name}
                        </label>
                    )}
                </div>
                <div className="h-8 border-b-[1px] border-[#ccc]">
                    <FormHelperText error={!!formik.touched.section && !!formik.errors.section}>
                        <> {formik?.errors?.section} </>
                    </FormHelperText>
                </div>
                <div className="h-16">
                    <FormHelperText error>{error}</FormHelperText>
                </div>
                <WhiteButton type="submit" className="w-full py-3 text-xs">
                    Update book
                </WhiteButton>
            </form>
            <div className='mt-4'>
                <WhiteButton onClick={handleDelete} className="w-full py-3 text-xs">
                    Delete book
                </WhiteButton>
            </div>
        </div>

    )
}

export default EditBook