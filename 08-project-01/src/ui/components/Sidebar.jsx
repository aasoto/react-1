import React, { useContext } from 'react'
import { SearchCandidateInput } from '../../candidates';
import { SidebarContext } from '../context';

export const Sidebar = () => {

  const { showSidebar } = useContext(SidebarContext);

  return (
    <aside className={`fixed z-10 top-24 left-5 h-5/6 w-72 p-3 shadow-xl bg-white rounded-lg animate__animated ${showSidebar ? 'block animate__fadeInLeft' : 'animate__fadeOutLeft'}`}>
      <SearchCandidateInput/>
    </aside>
  )
}
