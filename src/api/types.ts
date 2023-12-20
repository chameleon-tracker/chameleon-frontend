export interface Project {
    id: string,
    title: string,
    description: string,
    description_markup: 'PLAIN' | 'MARKDOWN' | 'ASCIIDOC'
}