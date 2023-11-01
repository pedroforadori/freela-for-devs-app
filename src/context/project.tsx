import { createContext, useState } from 'react'
import { PropsType } from '../types/themeType'
import { ProjectType } from '../types/projectType'
import { getProjectById } from '../api/project'


export const ProjectContext = createContext<ProjectType>({} as ProjectType)

export const ProjectProvider = ({ children }: PropsType) => {
    const [ project, setProject ] = useState<object | null>(null)
    
    const getProject = async (id: string) => {
        const projects = await getProjectById(id)
        setProject(projects)
    }
    
    return(
        <ProjectContext.Provider value={{ project, getProject }}>
            {children}
        </ProjectContext.Provider>
    )
}