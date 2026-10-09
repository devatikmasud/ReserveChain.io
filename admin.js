(() => {
  const views = [...document.querySelectorAll('.admin-view')];
  const sideButtons = [...document.querySelectorAll('[data-view]')];
  const titleMap = {overview:['Workspace overview','A clickable front-end concept for proposed administration workflows.'],assets:['Asset Registry','Sample asset program and passport records.'],documents:['Document library','Supplied sample files and review classifications.'],publishing:['Publishing workflow','Proposed controlled content lifecycle.'],waitlist:['Waitlist review','Privacy-safe sample entries only.'],modules:['Module controls','Future functions remain inactive until authorised.']};
  const title = document.querySelector('#adminTitle'), subtitle = document.querySelector('#adminSubtitle');
  const toast = document.querySelector('#adminToast'); let toastTimer;
  function notify(message){ toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2800); }
  function showView(name){views.forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));sideButtons.forEach(b=>b.classList.toggle('active',b.dataset.view===name));if(titleMap[name]){title.textContent=titleMap[name][0];subtitle.textContent=titleMap[name][1];} }
  sideButtons.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
  document.querySelectorAll('[data-go-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.goView)));
  const search=document.querySelector('#assetSearch'), filter=document.querySelector('#assetStatusFilter');
  function filterRows(){document.querySelectorAll('#assetTableBody tr').forEach(row=>{const q=(search?.value||'').toLowerCase();const state=row.querySelector('.state-tag')?.textContent.trim()||'';row.hidden=!(row.dataset.search.includes(q)&&((filter?.value||'all')==='all'||state===filter.value));});}
  search?.addEventListener('input',filterRows);filter?.addEventListener('change',filterRows);
  const states=['Draft','Under Review','Approved','Published','Unpublished','Archived'];
  document.querySelectorAll('.cycle-state').forEach(button=>button.addEventListener('click',()=>{const tag=button.closest('tr').querySelector('.state-tag');const next=(states.indexOf(tag.textContent.trim())+1)%states.length;tag.textContent=states[next];tag.className='state-tag '+(states[next]==='Published'?'published':states[next]==='Under Review'||states[next]==='Approved'?'review':states[next]==='Archived'||states[next]==='Unpublished'?'archived':'');filterRows();notify(`Preview state changed to “${states[next]}”. Not saved to a server.`);}));
  document.querySelectorAll('.module-toggle').forEach(button=>button.addEventListener('click',()=>{const cell=button.closest('tr').children[1];const current=cell.textContent.trim();const next=current==='Preview enabled'?'Inactive':'Preview enabled';cell.innerHTML=`<span class="state-tag ${next==='Inactive'?'archived':'published'}">${next}</span>`;notify(`Visual preview updated: ${button.closest('tr').children[0].textContent}. No production module was changed.`);}));
})();