export interface Project {
    id: string,
    summary: string,
    description: string,
    description_markup: 'PLAIN' | 'MARKDOWN' | 'ASCIIDOC'
}
