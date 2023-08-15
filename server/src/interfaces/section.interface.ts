export interface ISection {
    id: string
    section_name: string
}

export interface ICreateSectionDto extends Pick<ISection, 'section_name'> {
    section_name: string
}

export interface IUpdateSectionDto extends Pick<ISection, 'section_name'> {
    section_name: string
}