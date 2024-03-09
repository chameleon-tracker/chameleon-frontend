export interface Project {
    id: string,
    name: string,
    summary: string,
    description: string,
    description_markup: 'PLAIN' | 'MARKDOWN' | 'ASCIIDOC'
}
