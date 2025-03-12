<template>
  <div id="home">
    <van-row>
      <van-col span="5">
        <van-sidebar v-model="active" @change="onChange">
          <van-sidebar-item title="JAVA基础" />
          <van-sidebar-item title="SPRING相关" />
          <van-sidebar-item title="Redis相关" />
          <van-sidebar-item title="Mysql相关" />
          <van-sidebar-item title="VUE相关" />
          <van-sidebar-item title="微服务相关" />
          <van-sidebar-item title="场景" />
        </van-sidebar>
      </van-col>
      <van-col span="19">
        <van-collapse v-show="active == 0" v-model="activeName" accordion>
          <van-collapse-item title="JAVA基本数据类型有那些" name="1"
            >四类八种，整形（byte,short,int,long），浮点型（float,double），char类型，boolean类型</van-collapse-item
          >
          <van-collapse-item title="JAVA的访问修饰符及访问范围" name="2">
            public可以访问任何地方
            <br />protected可以访问当前类所在包和其子类
            <br />default可以访问当前类所在包 <br />private只可以访问当前类内部
          </van-collapse-item>
          <van-collapse-item title="重载与重写的区别" name="3">
            重载（overload）:
            只发生在同一个类中，方法名必须相同，方法参数需不一致。与访问修饰符与返回值类型无关
            <br />重写（overwrite）：
            发生在父子类中，方法名与父类方法名相同，方法参数个数类型及返回值类型一致，抛出异常范围不大于父类，访问修饰符不小于父类。
          </van-collapse-item>
          <van-collapse-item title="Final类的特点" name="4"
            >final修饰的类不能继承；final修饰的方法不能重写；final修饰的属性不能修改</van-collapse-item
          >
          <van-collapse-item title="类的加载过程" name="5">
            类加载按需加载，当需要一个类时，类加载器会将类的字节码文件加载到内存中，放到方法区，生成此类的模板。而类加载器会
            使用双亲委派的模式，避免此类重复加载。<br />
            而类加载一般有类加载->链接（验证、准备、解析）->初始化几个过程
          </van-collapse-item>
          <van-collapse-item title="什么是垃圾处理" name="6"
            >垃圾收集是将分配给对象但不再使用的内存回收或释放的过程。如果一个对象没有指向它的引用或者其赋值为null,则次对象适合进行垃圾回收</van-collapse-item
          >
          <van-collapse-item title="抽象类和接口的区别" name="7">
            抽象类：抽象类单继承，不仅可以有抽象方法也可以有自己实现的方法
            <br />接口：接口多实现，一般接口只有抽象方法。
          </van-collapse-item>
          <van-collapse-item title="什么是类的反射机制" name="8"
            >通过
            Class对象，可以得出当前类的方法、构造方法、接口、父类等等信息，同时可以通过反射实例化一个类、设置属性、调用方法。</van-collapse-item
          >
          <van-collapse-item title="static的使用" name="9">
            静态方法不可以调用非静态的属性和方法
            <br />非静态方法可以调用静态方法和属性
          </van-collapse-item>
          <van-collapse-item title="写clone()方法时通常都有一行代码" name="10"
            >super.clone()，Clone有缺省行为，它负者产生正确的大小空间，并逐位复制</van-collapse-item
          >
          <van-collapse-item title="StringBuffer和StringBuilder的区别" name="11"
            >StringBuffer线程安全；StringBuilder效率更高，线程不安全；</van-collapse-item
          >
          <van-collapse-item title="JAVA中都有那些IO流" name="12">
            按单位可以分为字节流和字符流；
            <br />按方向可以分为输入流和输出流；
            <br />按功能可以分为高层流和低层流（低层流指一次只读取一个单位，而高层流一次可以读取一批单位）
          </van-collapse-item>
          <van-collapse-item title="JVM内存模型" name="13">
            JVM内存模型包括执行引擎（垃圾回收，及时编译器，解释器）和运行时数据区和本地库接口
            <br />运行时数据区包含：
            <br />方法区（MethodArea）：存储类的信息，常量，静态变量，即时编译器编译后的代码。
            <br />堆（Heap）：存放new出来的对象 <br />程序计数器（PC
            Register）：指向当前线程执行的字节码地址 <br />本地方法区（Native
            Method Stack）：可以调用本地方法 <br />虚拟机栈（JVM
            Stack）：存储方法的栈针，包括局部变量表，操作数栈，方法出口，动态链接等信息
            <br />
          </van-collapse-item>
          <van-collapse-item title="集合有哪些接口" name="15"
            >Colection接口和Map接口；Collection下包括Set和List接口</van-collapse-item
          >
          <van-collapse-item title="ArrayList和LinkList区别" name="16">
            ArrayList由数组实现，查找快速，插入和删除比较慢；
            <br />LinkList由双向链表实现，插入和删除快，查询较慢，占用空间大，因为每一个元素都存放有指向下一个和上一个元素的指针。
          </van-collapse-item>
          <van-collapse-item title="Set的特点" name="17"
            >存放的元素都是不重复的。（先比较HashCode()方法，再比较equal()方法）</van-collapse-item
          >
          <van-collapse-item title="面向对象的特征有哪像" name="18">
            封装：一个类包括多个属性及方法。
            <br />多态：静态（重载、重写）动态（父类接受子类实例，接口接受实现实例
            ）
            <br />继承：类继承于父类，具有父类的所有属性与方法，可以重用，也可以覆盖。
            <br />抽象：找共性，将共有的属性、方法放到父类中
          </van-collapse-item>
          <van-collapse-item title="如何定义一个线程" name="19">
            实现Runable接口并重写run()方法;
            <br />继承Thread类重写run()方法； <br />启动线程使用start()方法；
          </van-collapse-item>
          <van-collapse-item title="wait和sleep的区别" name="20">
            拥有的对象不同：wait()是Object的方法,sleep()是Thread的方法；
            <br />wait()释放对象锁，且只能在同步代码块或同步方法中使用，可以通过notify唤醒；
            <br />sleep()持有对象锁，只能等待设定时间结束，否则发生异常
          </van-collapse-item>
          <van-collapse-item title="jdk代理和cjlib代理的区别" name="21">
            jdk代理实现InvocationHandler接口；jdk代理只能代理接口类
            <br />cjlib代理实现MethodInterceptor接口；使用动态枝剪技术生成目标类子类来代理。
          </van-collapse-item>
          <van-collapse-item title="jdk1.8有哪些特性" name="22">
            函式接口的使用
            <br />Stream的使用 <br />LocalDateTime的使用
            <br />Optional容器的使用
          </van-collapse-item>
          <van-collapse-item title="并发问题" name="23">
            有序性、原子性、可见性
            <br />volatile 修饰变量解决有序性和可见性问题；synchronzied
            通过加锁解决有序性、可见性、原子性问题；
          </van-collapse-item>
          <van-collapse-item title="java中的类加载器" name="24">
            1.引导类加载器；加载java的核心库 2.扩展类加载器；加载扩展类库(jre
            lib下的jar包) 3.系统类加载器；加载应用类路径下的类及jar包
            4.自定义加载器
          </van-collapse-item>
          <van-collapse-item title="java值传递和引用传递" name="25">
            值传递的是副本，不会改变地址；
            引用传递的是引用地址。java中只用值传递。
          </van-collapse-item>
          <van-collapse-item title="for和forEach区别" name="26">
            for通过index下标进行访问；forEach通过指针进行访问
          </van-collapse-item>
          <van-collapse-item title="乐观锁和悲观锁的区别" name="27">
            悲观锁设计思路是当存在多个线程竞争一个资源的可能，首先会加上锁，阻止其他线程获得这个资源，直到他对资源修改完成。例如sychronized关键字<br />
            乐观锁设计思路是当存在多个线程竞争一个资源的可能，首先会获取资源，然后修改资源，最后再看是否发生冲突。实现方式有CAS，版本号控制等。<br />
            乐观锁用多用于读多写少，相比悲观锁他的效率更高。
          </van-collapse-item>
          <van-collapse-item title="jvm的调优命令有哪些" name="28">
            jstack 查看线程状态，分析出繁忙的线程在干嘛 jmap
            查看内存信息，生成dump文件 jinfo 查看jvm参数和修改部分动态参数 jstat
            查看jvm状态 jps 查看进程
          </van-collapse-item>
          <van-collapse-item title="事物的传播行为" name="29">
            1.request
            支持事物，若存在事物，会加入到这个事物当中；若不存在事物，会新建一个事物<br />
            2.request_new
            无论当前是否存在事物，都会新建一个事物，若存在事物，会当前事物挂起<br />
            3.support
            支持事物，若当前存在事物，会加入事物中；若不存在以非事物形式运行<br />
            4.not_support 不支持事物，不论是否存在事物；以非事物形式运行 <br />
            5.mandatory 必须支持事物，若当前不存在事物；会抛出异常<br />
            6.never
            不支持事物，若当前存在事物，会抛出异常；若不存在以非事物形式运行<br />
            7.nested 嵌套事物，会在当前事物内部开启新的事物。
          </van-collapse-item>
          <van-collapse-item title="事物的特性" name="30">
            1.原子行 一个事物所有的操作要不是提交，要不就是回滚<br />
            2.一致性 事物执行时数据库的所有约束原则保持一致<br />
            3.永久性 事物数据一旦提交，永远保存在数据库中<br />
            4.隔离性 事物之间互不干扰<br />
          </van-collapse-item>
          
        </van-collapse>
        <van-collapse v-show="active == 1" v-model="activeName" accordion>
          <van-collapse-item title="SpringMVC流程" name="1">
            用户请求->DispatcherServlet（前端控制器）->HandlerMapping（处理器映射器）‌->
            HandlerAdapter（处理器适配器）-> DispatcherServlet（前端控制器）
            <br />DispatcherServlet（前端控制器）->
            执行相应的业务（从数据库中获取数据 ModelAndView） ->
            ViewResolver（视图解析器）-> DispatcherServlet（前端控制器）->
            返回给用户
          </van-collapse-item>
          <van-collapse-item title="依赖注入" name="2">
            一种重要的设计模式，允许对象在不直接创建依赖的情况下使用，
            通过spring容器来管理这些依赖。
            <br />一般的可以通过构造器，setter方法及接口进行依赖注入
          </van-collapse-item>
          <van-collapse-item title="Spring中bean的生命周期" name="3">
            bean对象的实例化;通过beanFactory工厂创建bean对象
            <br />依赖注入;通过setter方法或者构造器进行 <br />初始化 <br />销毁
            <br />这其中提供了许多钩子函数，比如初始化前的beanNameAware、beanFactoryAware提供容器信息。
            beanPostProcessor提供ben初始化前后的自定义逻辑postProcessBeforeInitialization()、postProcessAfterInitialization()。
            initalizingBean实现自定义初始化逻辑<br />
            实例化 → 属性填充 → BeanNameAware → BeanFactoryAware → 前置处理器 →
            @PostConstruct → 初始化方法 → 后置处理器 → 使用中 → @PreDestroy →
            销毁。
          </van-collapse-item>
          <van-collapse-item title="spring常用的Annotation" name="4">
            @Bean、@Value、@Controller、@Service、@Repository、@Configuration、@Autowired
            、@Resource、 @Import、@Qualifier
          </van-collapse-item>
          <van-collapse-item title="Springboot自动装配原理" name="5">
            基于@EnableAutoConfiguration扫描META-INF/spring.factories中的配置类，条件注解（如@ConditionalOnClass）控制是否生效。<br />
            自定义Starter： 创建配置类+spring.factories，定义条件化Bean。
          </van-collapse-item>
          <van-collapse-item title="Spring中事务失效" name="6">
            1. @Transcation注解用到非public方法上修饰对的（springAop特性）
            <br />2.由于数据库引擎不支持事务(如mysql的Mysiam) <br />3.
            spring容器管理的bean才接受事务 <br />4. 当前类自身调用自己的方法
            <br />5. 异常类错误类型（非运行时异常） </van-collapse-item
          >
          <van-collapse-item title="Spring如何解决循环依赖" name="7"
            >三级缓存和延迟加载机制。（先在缓存中创建中创建纯净对象，延迟完成实例化）</van-collapse-item
          >
          <van-collapse-item
            title="BeanFactory与ApplicationContext区别"
            name="8"
          >
            BeanFactory主要作用是bean的创建和读取；<br />
            ApplicationContext继承于BeanFactory功能更丰富，国际化、aop、消息发送响应机制
          </van-collapse-item>
          <van-collapse-item title="Spring中支持bean作用域有哪些" name="9">
            1.singleton; 单例模式 <br />
            2.protoype; 原型模式 <br />
            3.request; 每次http请求都会创建一个request <br />
            4.session; 每次session会回都会有一个session域 <br />
            5.global-session 所有的session会话都有一个gloabal-session域
          </van-collapse-item>
          <van-collapse-item title="@RequestParam和@RequestBody区别" name="9">
            @RequestBody只接受请求体的格式请求，一般为Post请求 <br />
            @RequestParam 只接受key-value的参数，一般为get请求
          </van-collapse-item>
          <van-collapse-item title="SpringCloud有哪些组件" name="10">
            Eurake 注册中心<br />
            Zuul 网关服务<br />
            Feign 微服务之间的调用<br />
            Ribbon 实现分布式服务时提供负载均衡策略<br />
            Hystrix 提供熔断机制，实现服务隔离
          </van-collapse-item>
          <van-collapse-item title="Spring的特性" name="11">
            1.IOC（控制反转）将创建对象的权利交由spring进行管理<br />
            2.DI（依赖注入）允许对象在不直接创建依赖的情况下使用，通过spring容器来管理这些依赖。<br />
            3.AOP（切面编程）不修改源代码的情况下对其进行增强，比如日志的记录。
          </van-collapse-item>
        </van-collapse>
        <van-collapse v-show="active == 2" v-model="activeName" accordion>
          <van-collapse-item title="Redis的部署模式" name="1">
            1.单机模式；即部署一台redis服务<br />
            2.主从模式；即部署一个redis主服务器master，多个slave服务。主redis服务主要用于写，从服务用于读。主服务写完成同步更新到从服务<br />
            3.Sentinel哨兵模式；避免主服务master出现不可用的情况<br />
            4.集群模式
          </van-collapse-item>
          <van-collapse-item title="Redis的分区方案" name="2">
            1.客户端分区，由客户端决定数据在哪个节点的存取<br />
            2.代理分区；客户端将请求发送给代理，由代理决定数据存在什么分区<br />
            3.查路由，客户端随机请求一个ridis实例，然后redis将请求转发给正确的redis节点
          </van-collapse-item>
          <van-collapse-item title="Redis的RDB与AOF模式优缺点" name="3">
            RDB为快照模式，即某一时间点子线程会把redis所有的数据以文件形式存储到磁盘中。
            这样主线程负责数据处理，而不影响子线程io处理。保证性能最大化。缺点是可能导致数据丢失。<br />
            AOF为追加型模式，可以让每条命令都会以追加文件形式持久化，rewrite模式可以使文件过大时合并命令。
            对于RDB来说更加安全。
          </van-collapse-item>
          <van-collapse-item title="Redis的缓冲穿透解决" name="4">
            缓冲穿透指的是用户大量的访问数据库中没有的数据，导致系统崩溃或者响应变慢。<br />
            1.可以设置键值为null的数据。<br />
            2.使用布隆过滤器，在访问数据库之前过滤掉非法的key值
          </van-collapse-item>
          <van-collapse-item title="Redis的使用场景" name="5">
            1.读多写少<br />
            2.分布式锁<br />
            3.字典类数据<br />
            4.时效性数据, 比如验证码<br />
            5.系统单点登陆存储用户信息<br />
          </van-collapse-item>
          <van-collapse-item title="为什么redis单线程效果好" name="6">
            基于内存读写，使用nio的多路复用技术
          </van-collapse-item>
        </van-collapse>
        <van-collapse v-show="active == 3" v-model="activeName" accordion>
          <van-collapse-item title="Mysql优化有哪些方式" name="1">
            索引优化，当需要频繁作为条件使用的字段添加索引；<br />
            多个条件时可以建立组合索引；<br />
            使用explain来分析语句，避免多个条件时索引失效。<br />
            使用缓冲存储热点数据，避免频繁使用数据库<br />
          </van-collapse-item>
          <van-collapse-item title="什么情况下索引会失效" name="2">
            组合索引时没有遵循最左索引原则<br />
            查询条件使用不等号（not）、or、like<br />
            在索引列上进行相关计算<br />
          </van-collapse-item>
          <van-collapse-item title="Mysql的引擎有哪些" name="3">
            InnoDB;事务型存储引擎，并且有较高并发的读取效率<br />
            MyISAM;不支持事务处理和行级锁，特点简单、快速、小巧<br />
            MEMORY;存储引擎，存放在内存中，数据量小，读取块<br />
            ARCHIVE;归档，有很好的压缩机制<br />
            CSV;紧凑数据块,支持CSV格式数据文件,常用于其他软件或数据库中导入数据
          </van-collapse-item>
          <van-collapse-item title="聚簇索引与非聚簇索引" name="4">
            聚簇索引指的是值与索引都是一样的，找到索引就找到值了，一般主键都是聚簇索引<br />
            非聚簇索引，索引与值非开存储，查询时需要先查到索引然后再根据索引查询值<br
          /></van-collapse-item>
          <van-collapse-item title="如何分库分表" name="5">
            垂直分库 按业务拆分（如用户库，订单库），水平分表 按分片健分散数据
          </van-collapse-item>
        </van-collapse>
        <van-collapse v-show="active == 4" v-model="activeName" accordion>
          <van-collapse-item title="vue的生命周期" name="1">
            beforeCreate:在创建实例后调,数据观测和事件配置之前调用。 created:
          </van-collapse-item>
        </van-collapse>
        <van-collapse v-show="active == 5" v-model="activeName" accordion>
          <van-collapse-item title="springcloud的组件有哪些" name="1">
               Eureka;服务注册与发现的核心组件，允许服务实例自动注册到注册中心，并通过服务名进行调用<br>
               Ribbon;客户端负载均衡组件，负责从注册中心发现服务实例，并通过负载均衡算法选择实例，再通过HTTP协议进行通信<br>
               Zuul;网关上可以作限流<br>
               OpenFeign;简化服务间 HTTP 调用，默认集成 Ribbon 实现负载均衡。<br>
               Hystrix;统一的熔断器抽象层<br>
          </van-collapse-item>
          <van-collapse-item title="什么是服务降级" name="2">
              在系统资源不足、依赖服务故障或高并发压力下，暂时关闭非核心功能或返回预设的简化结果<br>
              服务降级作用：<br>
              1.防止系统崩溃<br>
              2.保障核心功能<br>
              3.快速失败
          </van-collapse-item>
        </van-collapse>
        <van-collapse v-show="active == 6" v-model="activeName" accordion>
          <van-collapse-item title="Redis和Mysql数据不一致" name="1">
          </van-collapse-item>
          <van-collapse-item title="登陆模块的步骤" name="2">
            1.用户登陆信息验证<br />
            2.给用户发送token<br />
            3.之后的信息传输对token进验证
          </van-collapse-item>
          <van-collapse-item title="cookie和session的区别" name="3">
            1.cookie是存储在客户端中,session存储在服务器中<br />
            2.cookie可以在客户端中持久化存储,而对话结束后session会销毁<br />
            3.cookie存储的数据量较小,而session可存储数据量大
          </van-collapse-item>
          <van-collapse-item title="高并发时对系统的保护措施" name="4">
            1.对服务器引入缓存机制;如redis,避免频繁访问数据库<br />
            2.网关上可以作限流或者降级处理<br />
            3.使用消息队列中间部件，实现削峰填谷
          </van-collapse-item>
          <van-collapse-item title="当超时订单未完成支付时如何处理" name="5">
            消息投入到死信队列中，到达时间后，死信交换机将消息投递到消费队列，
            消费队列查找没有支付订单则删除该订单。
          </van-collapse-item>
          <van-collapse-item title="哪行场景下事务会失效" name="6">
               1. 自身的调用 <br>
               2. 在非共有类中使用@Transiton,这是代理类特性决定的<br>
               3. 不是spring容器中的实例<br>
               4. 数据源不同
          </van-collapse-item>
          <van-collapse-item title="分布式锁使用的必要条件" name="7">
               1. 互斥性；任意时刻，锁只能被一个线程持有<br>
               2. 高可用性；锁必须要要有容错，即使一个节点故障，锁机制仍然能够运行。如redis使用哨兵模式部署<br>
               3. 可重用性；一个线程获得锁之后还可以获得锁，避免业务处理时间过长，导致锁超时而不可以再次获取。<br>
               4. 非阻塞性；避免无限等待获取锁，造成阻塞，影响系统性能<br>
               5. 超时释放；避免死锁，超时后自动释放锁。<br>
          </van-collapse-item>
          <van-collapse-item title="哪些条件下,rabbitMq消息会进入到死信队列" name="8">
               1.消息过期<br>
               2.消息被拒，且无法重回队列<br>
               3.消息到达最大长度<br>
               4.消息无法被路由到目标队列
          </van-collapse-item>
          <van-collapse-item title="雪花id如何保障在分布式系统中不重复" name="9">
               雪花id由是由机器id、时间戳、序列号组成。每台服务器都有唯一的机器id，时间戳和序列号保障了在每毫秒可以生成4096个不同的id。
          </van-collapse-item>
          <van-collapse-item title="冒泡算法实现" name="10">
                通过n-1循环，然后循环都从第一个元素开始，比较相邻的两个元素大小，如果大于交换位置，直到最后一个元素。这样每一次循环。
                最大元素排在最后一位。循环n-1次完成排序。
          </van-collapse-item>
          <van-collapse-item title="哪些场景下会出现OOM的情况" name="10">
                1.
          </van-collapse-item>
        </van-collapse>
      </van-col>
    </van-row>
  </div>
</template>
<script>
// import { showToast } from "vant";
export default {
  data() {
    return {
      activeName: "-1",
      active: "0",
    };
  },
  methods: {
    onChange(index) {
      this.active = index;
      // showToast(index);
    },
  },
};
</script>
<style scoped>
#home .van-collapse-item__content {
  color: rgba(226, 63, 13, 0.637);
}
</style>
