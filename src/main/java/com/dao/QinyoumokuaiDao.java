package com.dao;

import com.entity.QinyoumokuaiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.QinyoumokuaiView;

/**
 * 亲友动态 Dao 接口
 *
 * @author 
 */
public interface QinyoumokuaiDao extends BaseMapper<QinyoumokuaiEntity> {

   List<QinyoumokuaiView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
