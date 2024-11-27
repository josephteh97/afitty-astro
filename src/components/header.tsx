import * as React from "react";
import LOGO from "/assets/logo.png";
import { Image } from 'astro:assets';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export const Header = () => {
    return (
        <NavigationMenu className="mx-auto text-afitty2">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href="/">
                    <img src="/assets/logo.png" alt="LOGO" className="w-28"/>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            主页
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/about">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            关于我们
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <NavigationMenuTrigger>服务</NavigationMenuTrigger>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64">
                            {/* 商务咨询 */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>商务咨询</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <a href="/services/enterprise-strategy-consulting">
                                                企业战略咨询
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="/services/tax-system-management">
                                                财税系统管理
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">人力资源管理</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">合并与收购</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">初创企业</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">尽职调查</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">Pre IPO</a>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            {/* 出海服务 */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>出海服务</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>秘书服务</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">公司注册</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">公司变更</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">企业银行开户</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">公司年审</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>财务服务</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">月度处理</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">账户结算</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">管理报表</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>税务服务</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">税务规划</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">GST</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">年底税务申报</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            <a href="">人力资源</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                公司日常代运营
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">行政服务</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">人力资源</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">财务服务</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">税务服务</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">牌照服务</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            <a href="">牌照注册</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">税务身份</a>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            {/* 政府津贴 */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>政府津贴</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <a href="">新加坡企业</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">外资企业</a>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            {/* 资产配置 */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>资产配置</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                家族企业咨询
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">基金设立</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">银行开户</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">VCC设立</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                国际财富管理
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">基金设立</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">信托咨询</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">保险咨询</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">房产投资</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">艺术品投资</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            {/* 跨境税筹 */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>跨境税筹</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <a href="">税务合规</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">税务优化</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">跨境融资</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">BEPS防范</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="">国际税收环境分析</a>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            {/* 税务身份规划 */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>税务身份规划</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                新加坡身份
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger>
                                                            家族办公室
                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                <DropdownMenuItem>
                                                                    <a href="">单一家族办公室</a>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <a href="">联合家族办公室</a>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub>
                                                    <DropdownMenuItem>
                                                        <a href="">GIP</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger>
                                                            股权投资
                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                <DropdownMenuItem>
                                                                    <a href="">教培</a>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <a href="">餐饮</a>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <a href="">地产</a>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <a href="">幼儿园</a>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <a href="">AI</a>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <a href="">其他</a>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>护照项目</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">小国护照</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">土耳其护照</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>绿卡项目</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <a href="">希腊</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">马其他</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">西班牙</a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <a href="">美国</a>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            {/* 品牌战略 */}
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>品牌战略</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <a href="">品牌定位</a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <a href="">打造品牌</a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <a href="">新媒体运营</a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <a href="">电商</a>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>

                            {/* Tech科技 */}
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Tech科技</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <a href="">ERP</a>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <a href="">AI</a>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <NavigationMenuTrigger>行业资讯</NavigationMenuTrigger>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <a href="">Blog</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="">行业</a>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <a href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            联系我们
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
