import Card from '../components/Card'
export default function Page1() {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4'>
                <span className="inline drop-shadow-sm bg-white px-6 py-2.5 rounded-full">
                    <a
                        href="#"
                        className="font-bold bg-gradient-to-r from-[#f338a4] to-[#110a8f] bg-clip-text text-transparent"
                    >
                        <span className="font-medium">مصدرك الأول للتعلم التقنيات الإبتكارية</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-6 inline"
                            viewBox="0 0 24 24"
                        >
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: "#f338a4", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#110a8f", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="1.5"
                                d="m11.924 8.8l-.358-.205c-.393-.223-.59-.335-.723-.522c-.134-.187-.19-.427-.301-.908l-.102-.437c-.394-1.692-.59-2.538-1.157-2.702m2.64 4.773c1.383.787 2.075 1.181 2.099 1.841s-.635 1.15-1.953 2.13l-.34.253c-.375.278-.562.417-.681.622m.876-4.846l7.62 2.11m-9.752 6.983c.551-.244.685-1.113.953-2.852l.069-.45c.076-.494.114-.74.233-.945m-1.255 4.247s-1.156-.3-2.364-1.386l-.312-.282c-.344-.308-.515-.463-.723-.523s-.427-.02-.867.062l-.4.075c-1.549.287-2.323.43-2.688-.08c-.365-.509-.08-1.334.492-2.985l.148-.427c.162-.469.243-.703.234-.945s-.107-.464-.302-.908l-.179-.404c-.688-1.56-1.033-2.341-.707-2.9s1.106-.525 2.667-.459l.404.017c.444.02.665.029.867-.06c.203-.09.362-.268.68-.624l.291-.324c1.122-1.252 1.683-1.878 2.25-1.713m.509 13.866l6.547 1.899c.693.201 1.04.302 1.399.096c.358-.206.457-.515.654-1.132c.128-.4.249-.871.33-1.4l.07-.45c.076-.495.114-.742.233-.946m-7.977-2.314l7.977 2.314M9.283 4.026L17.26 6.34c.566.164.763 1.01 1.156 2.702l.102.437c.112.481.168.722.302.908s.33.299.723.522m0 0l.357.204c1.383.788 2.074 1.181 2.098 1.842c.025.66-.634 1.15-1.952 2.128l-.34.254c-.375.278-.562.417-.682.622"
                            ></path>
                        </svg>
                    </a>
                </span>
                <h1 className='text-4xl font-extrabold text-center'>قائمة المساقات</h1>
            </div>
            <section className='grid grid-cols-3 gap-4 p-6'>
                <Card 
                    imageUrl="https://cdn.mos.cms.futurecdn.net/PjfazxMvpkBgoE9G2kJiDh.jpg"
                    title="مساق رايزبيري باي"
                    description="مساق يتعلم فيه الطلاب كيفية برمجة الرايزبيري باي"
                />
                <Card 
                    imageUrl="https://miro.medium.com/v2/resize:fit:1400/1*DcvZbgx03GYUw01z6wtUZA.jpeg"
                    title="مساق لغة Golang"
                    description="مساق يتعلم فيه الطلاب كيفية البرمجة بلغة Golang"
                />
                 <Card 
                    imageUrl="https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-network-programming/jcr:content/Grid/category_atl_1605/layout-category-atl/anchor_info_d47d.img.png/1647337863145.png"
                    title="مساق برمجة الشبكات"
                    description="مساق يتعلم فيه الطلاب كيفية برمجة الشبكات"
                />
            </section>
        </>
    )
}
