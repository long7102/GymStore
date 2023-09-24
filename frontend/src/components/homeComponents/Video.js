import React from "react";

const Video = () => {
    return(
        <div style={{padding: '40px 50px', display:'flex'}} class="video-container col-md-12">
        <div class='col-md-6'>
        <iframe style={{width: '100%'}} width="700" height="350" src="https://www.youtube.com/embed/49R3ZQd3DIw?si=3MWznCampbysa2Qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
        </div>
        <br/>
        <div style={{}} class='col-md-6 ms-4'>
            <h2>Chào mừng bạn đến với Warrior Gym Store - tất cả vì cơ thể bạn</h2>
            <p style={{fontSize: '17px'}}>Chúng tôi cung cấp đồ dùng và thiết bị tập gym chất lượng, giúp bạn xây dựng cơ thể khỏe mạnh và thể hình tốt hơn. Đội ngũ HLV chuyên nghiệp sẽ hỗ trợ bạn trong hành trình tập luyện của mình. Hãy đến và khám phá sự khác biệt tại cửa hàng Gym của chúng tôi!</p>
            <br/>
            <ul>
            <li>Chất lượng tuyệt vời</li>
            <li>Dịch vụ chăm sóc chu đáo</li>
            <li>Giá cả phải chăng</li>
            <li>Chế độ bảo hành tốt</li>
            <li>Và hàng ngàn ưu đãi khác</li>
        </ul>
        </div>
        </div>
    //     <div class="card mb-3" style={{  margin: '20px 55px'}}>
    //     <div class="row g-0">
    //       <div class="col-md-4">
    //         {/* <img src="..." class="img-fluid rounded-start" alt="..."/> */}
    //         <iframe class="img-fluid rounded-start" width="700px" height="350px" src="https://www.youtube.com/embed/49R3ZQd3DIw?si=3MWznCampbysa2Qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
    //       </div>
    //       <div class="col-md-8" style={{width: '700px', height: '350px'}}>
    //         <div class="card-body">
    //         <h2>Chào mừng bạn đến với Warrior Gym Store - tất cả vì cơ thể bạn</h2>
    //         <p style={{fontSize: '17px'}}>Chúng tôi cung cấp đồ dùng và thiết bị tập gym chất lượng, giúp bạn xây dựng cơ thể khỏe mạnh và thể hình tốt hơn. Đội ngũ HLV chuyên nghiệp sẽ hỗ trợ bạn trong hành trình tập luyện của mình. Hãy đến và khám phá sự khác biệt tại cửa hàng Gym của chúng tôi!</p>
    //         <br/>
    //         <ul>
    //         <li>Chất lượng tuyệt vời</li>
    //         <li>Dịch vụ chăm sóc chu đáo</li>
    //         <li>Giá cả phải chăng</li>
    //         <li>Chế độ bảo hành tốt</li>
    //         <li>Và hàng ngàn ưu đãi khác</li>
    //     </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    )
}
export default Video