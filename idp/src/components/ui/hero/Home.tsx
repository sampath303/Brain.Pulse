import { Timeline } from "../../../components/ui/hero/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Pituitary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-white text-left md:text-sm font-normal mb-3">
          Pituitary tumors are unusual growths that develop in the pituitary gland. This gland is an organ about the size of a pea. It's located behind the nose at the base of the brain. Some of these tumors cause the pituitary gland to make too much of certain hormones that control important body functions. Others can cause the pituitary gland to make too little of those hormones.
           </p>

           
          <h5 className="text-neutral-800 dark:text-neutral-200 text-left text-white md:text-sm font-bold mb-1">Symptoms</h5>
          <p className="text-neutral-800 dark:text-neutral-200 text-left md:text-sm text-white font-normal mb-1 mt-[-20]">
          Not all pituitary tumors cause symptoms. Sometimes these tumors are found during an imaging test, such as an MRI or a CT scan, that is done for another reason. If they don't cause symptoms, pituitary tumors usually don't need treatment.
          </p>
          
          <h5 className="text-neutral-800 dark:text-neutral-200 text-left text-white md:text-sm font-bold mb-1">Symptoms from tumor pressure
          </h5>
          <p className="text-neutral-800 dark:text-neutral-200 text-left md:text-sm text-white font-normal mb-1 mt-[-20]">
          Macroadenomas can put pressure on the pituitary gland, on nerves, on the brain and on other parts of the body nearby. That can cause symptoms such as:
          </p>
         
          
          
        <ol className="list-decimal pl-5 text-neutral-800 dark:text-neutral-200 text-left text-white md:text-sm font-normal mb-3 mt-[-20]">
            <li>
              Headache.
            </li>
            <li>
            Eye problems due to pressure on the optic nerve, especially loss of side vision, also called peripheral vision, and double vision.
            </li>
            <li>
            Pain in the face, sometimes including sinus pain or ear pain.
            </li>
            <li>
            Drooping eyelid.
            </li>
            <li>
            Nausea and vomiting.
            </li>
        </ol>
        
          <div className="grid grid-cols-2 gap-4">
            
            <img
              src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2019/03/14/20/11/pituitary-tumor-8col-3802786-009-0.jpg"
              alt="pituitary tumor"
              width={500}
              height={500}
            className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full cursor-pointer transition-transform duration-300 hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWTE_pF5jaMkH5Few9vosgyA0VWA_7zNrVIbdtRITxbcM5QDF&s"
              alt="pituitary tumor"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full cursor-pointer transition-transform duration-300 hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            
            />
          </div>
        </div>
      ),
    },
    {
      title: "Gliomas",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-left md:text-sm font-normal text-white mb-8">
          Gliomas are growths of cells that look like glial cells. The glial cells surround and support nerve cells in the brain tissue. Types of gliomas and related brain tumors include astrocytoma, glioblastoma, oligodendroglioma and ependymoma. Gliomas can be benign, but most are malignant. Glioblastoma is the most common type of malignant brain tumor.
          </p>
          <h5 className="text-neutral-800 dark:text-neutral-200 text-left text-white md:text-sm font-bold mt-[-15px] mb-1">
          Signs and symptoms          
          </h5>
          <p className="text-neutral-800 dark:text-neutral-200 text-left md:text-sm font-normal text-white mb-8">
          Symptoms of gliomas depend on the part of the central nervous system (CNS) that is affected. A brain glioma can cause headaches, vomiting, memory loss, seizures, vision problems, speech difficulties, and cranial nerve disorders as a result of increased intracranial pressure. Cognitive impairments such as vision loss arise in glioma patients when a tumor arises in or around their optic nerve. Spinal cord gliomas can cause pain, weakness, or numbness in the extremities.           
           </p>
           

          <div className="grid grid-cols-2 gap-4">
            
            <img
              src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2019/01/11/10/47/glioblastoma-8col-3802786-002-0.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full cursor-pointer transition-transform duration-300 hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
             />
            <img
              src="https://www.cancer.gov/rare-brain-spine-tumor/sites/g/files/xnrzdm226/files/styles/cgov_article/public/cgov_image/media_image/100/200/7/files/Midline%20Glioma%20%28Article%29.jpg?h=b26af281&itok=D0zLgULJ"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full cursor-pointer transition-transform duration-300 hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            
              />
          </div>
        </div>
      ),
    },
    {
      title: "Meningioma",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-left md:text-sm font-normal text-white mb-8">
          Meningioma, also known as meningeal tumor, is typically a slow-growing tumor that forms from the meninges, the membranous layers surrounding the brain and spinal cord. Symptoms depend on the location and occur as a result of the tumor pressing on nearby tissue. Many cases never produce symptoms. Occasionally seizures, dementia, trouble talking, vision problems, one sided weakness, or loss of bladder control may occur.
          </p>
          <h5 className="text-neutral-800 dark:text-neutral-200 text-left text-white md:text-sm font-bold mt-[-15px] mb-1">
          Signs and symptoms          
          </h5>
          <p className="text-neutral-800 dark:text-neutral-200 text-left md:text-sm text-white font-normal mb-1 mt-[-20]">
          Small tumors (e.g., less than 2.0 cm) usually are incidental findings at autopsy without having caused symptoms. Larger tumors may cause symptoms, depending on the size and location.
          </p>
          <ol className="list-decimal pl-5 text-neutral-800 dark:text-neutral-200 text-left text-white md:text-sm font-normal mb-3 mt-[-20]">
            <li>
            Focal seizures may be caused by meningiomas that overlie the cerebrum.
            </li>
            <li>
            Progressive spastic weakness in legs and incontinence may be caused by tumors that overlie the parasagittal frontoparietal region.
            </li>
            <li>
            Tumors of the Sylvian aqueduct may cause myriad motor, sensory, aphasic, and seizure symptoms, depending on the location.
            </li>
            <li>
            Increased intracranial pressure eventually occurs, but is less frequent than in gliomas.
            </li>
            </ol>


          
          <div className="grid grid-cols-2 gap-4">
            
            <img
              src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/11/03/ds00901_im03177_r7_meningesthu_jpg.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full cursor-pointer transition-transform duration-300 hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            
             />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SbkL0Eus7zh5ThION-VhrOLCspMWheZy9LWEhaxW1ZHrP1LIjKhuRmVO3yCBt9xxT0U&usqp=CAU"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full cursor-pointer transition-transform duration-300 hover:scale-110 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            
             />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
        
      <Timeline data={data} />
    </div>
  );
}
