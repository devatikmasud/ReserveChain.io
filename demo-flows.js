(()=>{
 const KEY='reservechain_demo_waitlist_v1';
 const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return []}};
 const save=(rows)=>{try{localStorage.setItem(KEY,JSON.stringify(rows));return true}catch{return false}};
 document.querySelectorAll('#waitlistForm, #standaloneWaitlist').forEach(form=>form.addEventListener('submit',e=>{
   e.preventDefault(); if(!form.reportValidity()) return;
   const d=new FormData(form); const email=String(d.get('email')||'').trim().toLowerCase();
   const rows=read(); if(rows.some(r=>r.email===email)){const out=form.querySelector('#formResult, #standaloneResult'); if(out){out.textContent='This email is already present in this browser demo. No server request was made.';out.classList.add('visible')} return;}
   const row={id:'WL-DEMO-'+String(Date.now()).slice(-8),firstName:String(d.get('firstName')||''),lastName:String(d.get('lastName')||''),email,country:String(d.get('country')||''),interest:String(d.get('interest')||''),material:String(d.get('material')||''),consent:!!d.get('consent')||form.querySelectorAll('input[type=checkbox]:checked').length>0,createdAt:new Date().toISOString(),status:'Demo submission'};
   const ok=save([...rows,row]); const out=form.querySelector('#formResult, #standaloneResult'); if(out){out.textContent=ok?`Thank you, ${row.firstName||'visitor'}. Your demo registration was saved in this browser only. It has not been sent to ReserveChain.`:'Browser storage is unavailable. The demo could not save this entry.';out.classList.add('visible')}
   if(ok) form.reset();
 }));
 document.querySelectorAll('#contactDemo').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const out=document.querySelector('#contactResult');out.textContent='Demo enquiry validated. It has not been sent or stored.';out.classList.add('visible')}));
 const table=document.querySelector('#demoWaitlistTable tbody'); if(table){const rows=read();table.innerHTML=rows.length?rows.map(r=>`<tr><td>${esc(r.id)}</td><td>${esc(r.firstName)} ${esc(r.lastName)}</td><td>${esc(r.email)}</td><td>${esc(r.interest)}</td><td>${esc(r.material)}</td><td>${esc(r.status)}</td></tr>`).join(''):'<tr><td colspan="6">No registrations saved in this browser yet. Submit a test registration on the Waitlist page.</td></tr>';}
 const exportBtn=document.querySelector('#exportDemoWaitlist'); if(exportBtn) exportBtn.addEventListener('click',()=>{const rows=read();const keys=['id','firstName','lastName','email','country','interest','material','consent','createdAt','status'];const csv=[keys.join(','),...rows.map(r=>keys.map(k=>'"'+String(r[k]??'').replaceAll('"','""')+'"').join(','))].join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='reservechain-demo-waitlist.csv';a.click();URL.revokeObjectURL(a.href)});
 function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
})();